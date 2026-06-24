export default function HighlightSection(props) {
  return (
    <>
      <div className={props.titleClass}>
        {props.title}
      </div>

      <div className="description-wrapper">
        {props.description}
      </div>

      <div className="price-wrapper">
        {props.price}
      </div>

      <div className="links-wrapper">
        <ul>
          <li><a href="">{props.link1}</a></li>
          <li><a href="">{props.link2}</a></li>
        </ul>
      </div>
    </>
  );
} 