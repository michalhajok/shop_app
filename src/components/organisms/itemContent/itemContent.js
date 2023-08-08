import React from "react";

import ItemFigure from "../../molecules/itemFigure";
import ItemDetails from '../../molecules/itemDetails'

import "./itemContent.scss";

function ItemContent({ product }) {
    const { picture } = product;

    return (
        <div className="itemPage--content">
        <ItemFigure picture={picture} />
        <ItemDetails product={product} />
        <section className="dolor">
            <article>
                <h4>Lorem</h4>
                <p>                
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis harum, nobis officia tenetur dolor consequuntur, incidunt sunt, ratione at recusandae enim earum! Eaque quasi molestiae eligendi commodi ratione quod deleniti!
                </p>
            </article>
            <article>
                <h4>Lorem</h4>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis harum, nobis officia tenetur dolor consequuntur, incidunt sunt, ratione at recusandae enim earum! Eaque quasi molestiae eligendi commodi ratione quod deleniti!
                </p>
            </article>
            <article>
                <h4>Lorem</h4>
                <p>                
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis harum, nobis officia tenetur dolor consequuntur, incidunt sunt, ratione at recusandae enim earum! Eaque quasi molestiae eligendi commodi ratione quod deleniti!
                </p>
            </article>
        </section>
        </div>
    );
}

export default ItemContent;
