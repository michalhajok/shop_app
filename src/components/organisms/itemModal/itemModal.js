import React from "react";

import Modal from "react-modal";

import "./itemModal.scss";

const ItemModal = ({
  warning,
  setModalIsOpen,
  item,
  saveUpdate,
  changeItem,
  modalIsOpen,
  brandList,
}) => {
  const { title, description, price, size, brand, picture } = item;

  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <p onClick={() => setModalIsOpen(false)}>Close</p>
      <div>
        {warning ? <p>Please check correctness of data </p> : null}
        <form>
          <label>
            <p>Brand:</p>
            <input
              autoComplete="off"
              required
              name="brand"
              list="brand"
              value={brand}
              onChange={changeItem}
            />
            <datalist id="brand">
              {brandList.map(({ _id, category }) => (
                <option key={_id} value={category} />
              ))}
            </datalist>
          </label>
          <label>
            <p>Title:</p>
            <input
              autoComplete="off"
              required
              name="title"
              type="text"
              value={title}
              onChange={changeItem}
            />
          </label>
          <label>
            <p>Price:</p>
            <input
              autoComplete="off"
              required
              name="price"
              type="number"
              value={price}
              onChange={changeItem}
            />
            <label>
              <p>Description:</p>
              <textarea
                autoComplete="off"
                name="description"
                value={description}
                onChange={changeItem}
              ></textarea>
            </label>
          </label>
          {size.map(({ size, quantity }, index) => (
            <label key={size}>
              <p>Size {size}:</p>
              <input
                autoComplete="off"
                required
                name="size"
                type="number"
                value={quantity}
                onChange={(e) => changeItem(e, index)}
              />
            </label>
          ))}
          {picture.map((picture, index) => (
            <label key={picture}>
              <p>Picture:</p>
              <input
                autoComplete="off"
                required
                type="text"
                name="picture"
                value={picture}
                onChange={(e) => changeItem(e, index)}
              />
            </label>
          ))}
        </form>
        <button onClick={saveUpdate}>Save changes</button>
      </div>
    </Modal>
  );
};

export default ItemModal;
