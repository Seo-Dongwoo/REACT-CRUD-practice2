import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

export const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    history.push("/");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>메모 추가</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          placeholder="새로운 메모를 입력하세요."
        ></Input>
      </FormGroup>
      <Button type="submit">추가</Button>
      <Link className="btn btn-danger" to="/" style={{ margin: "5px" }}>
        취소
      </Link>
    </Form>
  );
};
