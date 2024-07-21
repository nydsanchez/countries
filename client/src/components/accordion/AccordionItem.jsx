function AccordionItem({ content }) {
  return (
    <div className="content-box">
      <input type="checkbox" id={content} name={content} />
      <label htmlFor={content}> {content}</label>
    </div>
  );
}

export default AccordionItem;
