import { useEffect } from "react";
import $ from 'jquery';

const ReelButton = ({className = "", onClick, text }) => {

  useEffect(()=> {
    $('.btn-hover').on('mouseenter', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('span').css({
        top: y,
        left: x
        });
    });

    $('.btn-hover').on('mouseout', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('span').css({
        top: y,
        left: x
        });
    });
  }, [])

  return (
    <div className="btn_wrapper">
      <button aria-label="Play Showreel" onClick={onClick} className={`btn-white btn-hover btn-item ${className}`}>
        <span></span>
            {text}
      </button>
    </div>
  );
};

export default ReelButton;
