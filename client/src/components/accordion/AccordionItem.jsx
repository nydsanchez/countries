function AccordionItem({ content, id }) {
  return (
    <ul className="content-box">
      {console.log(content)}
      <li key={id}>{content}</li>
    </ul>
  );
}

export default AccordionItem;
