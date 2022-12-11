import PropTypes from "prop-types";
import React from "react";
import { DeleteBtn, List, Item, UserInfo, Avatar } from "./ContactLIst.styled";
import { HiOutlineTrash } from "react-icons/hi";

import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/operations";
import { selectFilteredContacts } from "redux/selectors";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, pnonenumber: phonenumber, avatar }) => {
        return (
          <Item key={id}>
            <Avatar src={avatar} alt="avatar" />
            <UserInfo>
              {name}: {phonenumber}
            </UserInfo>
            <DeleteBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              <HiOutlineTrash size={20} />
            </DeleteBtn>
          </Item>
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
