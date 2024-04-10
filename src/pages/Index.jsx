import React, { useState } from "react";
import { Box, Heading, Input, Button, Stack, List, ListItem, IconButton, Flex, Spacer } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (todoItem.trim() !== "") {
      setTodoList([...todoList, todoItem]);
      setTodoItem("");
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  return (
    <Box maxWidth="400px" margin="auto" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        My Todo List
      </Heading>
      <Flex mb={4}>
        <Input value={todoItem} onChange={(e) => setTodoItem(e.target.value)} placeholder="Enter a todo item" mr={2} />
        <Button onClick={handleAddTodo} colorScheme="blue" leftIcon={<FaPlus />}>
          Add
        </Button>
      </Flex>
      <List spacing={3}>
        {todoList.map((item, index) => (
          <ListItem key={index}>
            <Flex align="center">
              <Box>{item}</Box>
              <Spacer />
              <IconButton icon={<FaTrash />} onClick={() => handleRemoveTodo(index)} size="sm" colorScheme="red" />
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
