import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import image from "../../assets/flags/slider.jpg";
export default function CardElement({
  img,
  iconImg,
  imgClass,
  imgParentClass,
  title,
  titleClass,
  p,
  pClass,
  buttonText,
  buttonClass,
  customButton,
  alt,
  to,
  iconButton,
  isHorizontal,
  cardClass,
  customCard,
}) {
  return (
    <div
      className={`${(isHorizontal && "flex") || ""} ${cardClass || ""} rounded-lg border border-gray-200 bg-white shadow`}
    >
      <a href="#" className={` ${imgParentClass || ""}`}>
        {img && (
          <img
            className={`${(isHorizontal && "h-full") || ""} ${imgClass || ""}`}
            src={img}
            alt={alt}
          />
        )}
      </a>
      {iconImg && iconImg}
      {customCard ? (
        <main className="w-1/2">
          <div className="cardTitle">
            <h5 className={titleClass || ""}>{title}</h5>
          </div>
          <hr />
          <div className="price">
            <h2>$250</h2>
          </div>
          <div className="rate">rate</div>
          <div className="size">size</div>
          <hr />
          <div className="actions">actions</div>
          <div className="socials">socials</div>
        </main>
      ) : (
        <div className="p-1">
          <h5 className={titleClass || ""}>{title}</h5>
          <p className={pClass || ""}>{p}</p>
          {buttonClass ? (
            <Link to={to} className={buttonClass || ""}>
              {buttonText}
              {iconButton}
            </Link>
          ) : (
            customButton
          )}
        </div>
      )}
    </div>
  );
}

export function CardAd() {
  return (
    <div className="imgBg relative">
      <div className="img">
        <img src={image} className="rounded-lg" alt="" />
      </div>
      <div className="content absolute left-0 top-1/2 -translate-y-1/2 translate-x-[0] ps-10 text-start text-white">
        <h5 className="text-[15px] font-bold text-[#ffda0f]">
          From online store
        </h5>
        <Link to={"/shop"} className="text-[10px] font-bold md:text-5xl">
          Originals Comper
          <br />
          Star. Shoes
        </Link>
        <hr className="divider my-3 bg-white" />
        <p className="text-[15px] font-bold">
          for - Women
          <br />
          <span className=""></span>
          <span className="">
            Product Number : <span className="text-[#ffda0f]">DD2098</span>
          </span>
        </p>
      </div>
    </div>
  );
}

CardElement.propTypes = {
  img: PropTypes.string,
  iconImg: PropTypes.any,
  imgClass: PropTypes.string,
  imgParentClass: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  customButton: PropTypes.any,
  titleClass: PropTypes.string,
  p: PropTypes.string,
  pClass: PropTypes.string,
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string,
  to: PropTypes.string,
  iconButton: PropTypes.any,
  isHorizontal: PropTypes.bool,
  cardClass: PropTypes.string,
  customCard: PropTypes.string,
};
