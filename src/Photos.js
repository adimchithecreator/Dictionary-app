import React from "react";

export default function Photos(props) {
    if (props.photos) {
        return (
          <section className="Photos mt-5  p-5" >
            <div className=" grid grid-cols-3 gap-5">
              {props.photos.map(function (photo, index) {
                return (
                  <div className="" key={index}>
                    <a href={photo.src.original} target="_blank" rel="noreferrer">
                      <img src={photo.src.landscape} alt={photo.alt}  />
                    </a>
                  </div>
                );
              })}
            </div>
          </section>
        );
      } else {
        return null;
      }
    }