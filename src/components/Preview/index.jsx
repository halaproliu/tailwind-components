import { Fragment, useState, useEffect, useMemo } from "react";
import PreiveHeader from "./header";
import PreiveContent from "./content";
import { getRandomId } from "@/utils/random";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import beautify from "js-beautify";

const highlightMap = {
  html: "html",
  react: "jsx",
  vue: "html",
};

function Preview(props) {
  const {
    title,
    placeholder,
    iframeHeight,
    normalIframeHeight,
    moduleName,
    modules,
    iframeStyle,
    previewWrapper,
    replaceMarkedList,
    render,
  } = props;
  const id = getRandomId(20);
  const frameId = `frame-${id}`;
  const componentId = `component-${id}`;
  const [isPreview, setIsPreview] = useState(true);
  const [language, setLanguage] = useState("html");
  const [highlightLanguage, setHighlightLanguage] = useState("html");
  const [code, setCode] = useState("");

  const getFormatCode = (text, language) => {
    const options = {
      indent_size: 2,
      space_in_empty_paren: true,
    };
    if (language === "vue") {
      const matchTemplate = text.match(/<template>([\s\S]*)<\/template>/);
      let template = matchTemplate?.length > 0 && matchTemplate[0];
      template = beautify.html(template, options);
      const matchScript = text.match(/<script>([\s\S]*)<\/script>/);
      let script = matchScript?.length > 0 && matchScript[0];
      script = beautify.js(script, options);
      const matchStyle = text.match(/<style>([\s\S]*)<\/style>/);
      let style = matchStyle?.length > 0 && matchStyle[0];
      style = beautify.css(style, options);
      return `${template}\n${script}\n${style}`;
    }
    return beautify.html(text, options);
  };

  const getHighlightedCode = (code, language) => {
    // 使用Prism.js库来高亮显示代码
    return Prism.highlight(code, Prism.languages[language], language);
  };

  const onChange = (value) => {
    setLanguage(value);
    getRenderCode(value);
  };

  const getCode = (language) => {
    const key = `./snippets/${moduleName}/index.${language === "react" ? "jsx" : language}`;
    return modules[key];
  };

  const data = useMemo(() => {
    return {
      html: getCode("html"),
      react: getCode("react"),
      vue: getCode("vue"),
    };
  }, [modules]);

  const getRenderCode = (language) => {
    const code = getCode(language);
    const formatCode = getFormatCode(code, language);
    const hightLanguage = highlightMap[language] || "html";
    setHighlightLanguage(hightLanguage);
    const highlightedCode = getHighlightedCode(formatCode, hightLanguage);
    setCode(highlightedCode);
  };

  useEffect(() => {
    getRenderCode(language);
  }, [modules, language]);

  return (
    <Fragment>
      <section id={componentId}>
        <div className="grid grid-cols-[1fr,auto] items-center">
          <PreiveHeader
            title={title}
            isPreview={isPreview}
            onPreviewChange={(value) => setIsPreview(value)}
            language={language}
            onChange={onChange}
            data={data}
          />
          <PreiveContent
            frameId={frameId}
            previewSrc={getCode("html")}
            placeholder={placeholder}
            language={highlightLanguage}
            isPreview={isPreview}
            code={code}
            iframeHeight={iframeHeight}
            normalIframeHeight={normalIframeHeight}
            iframeStyle={iframeStyle}
            previewWrapper={previewWrapper}
            replaceMarkedList={replaceMarkedList}
            render={render}
          />
        </div>
      </section>
    </Fragment>
  );
}

export default Preview;
