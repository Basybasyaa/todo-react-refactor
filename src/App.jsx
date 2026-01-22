// App.js File
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from "react";

function App() {
    const [userInput, setUserInput] = useState("");
    const [filter, setFilter] = useState("all");
    const [list, setList] = useState(() => {
        const savedList = localStorage.getItem("todoList");
        return savedList ? JSON.parse(savedList) : [];

    });
    
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(list));
    }, [list]);

    // Add item if user input in not empty
    const addItem = () => {
        if (userInput.trim() === "") return;

        setList([
            ...list,
            {
                id: Date.now(),
                value: userInput,
                completed: false,
            },
        ]);
        // Clear input value
        setUserInput("");
    }

    // Function to delete item from list use id to delete
    function deleteItem(id) {
        if (confirm("Are you sure you want to delete this item?")) {
            setList(list.filter((item) => item.id !== id));
            return;
        }
    }

    const editItem = (index) => {
        const editedTodo = prompt("Edit your item:", list[index].value);
        if (editedTodo !== null && editedTodo.trim() !== "") {
            const updatedList = [...list];
            updatedList[index].value = editedTodo;
            setList(updatedList);
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem();
    };

    const filteredList = list.filter((item) => {
        if (filter === "active") {
            return !item.completed;
        }
        return true;
    });

    const toogleCompleted = (id) => {
        setList(
            list.map((item) =>
                item.id === id 
                ? { ...item, completed: !item.completed } 
                : item
            )
        )
    };

    

    
    return (
        <Container>
            <Row className="justify-content-center fw-bold fs-1">
                TODO LIST
            </Row>
            
            <hr />

            <Row>
                <Col md={{ span: 5, offset: 4 }}>
                    <form onSubmit={handleSubmit}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="add item . . . "
                            size="lg"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            aria-label="add something"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup>
                            <Button
                                variant="dark"
                                className="mt-2"
                                type="submit"
                                disabled={!userInput.trim()}
                            >
                                ADD
                            </Button>
                            <Button
                                variant="secondary"
                                className="mt-2 ms-2"
                                onClick={() => setFilter("all")}
                            >
                                All
                            </Button>
                            <Button
                                variant="secondary"
                                className="mt-2 ms-2"
                                onClick={() => setFilter("active")}
                            >
                                Active
                            </Button>
                        </InputGroup>
                    </InputGroup>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 5, offset: 4 }}>
                    <ListGroup>
                        {filteredList.length === 0 && (
                        <p>
                            {filter === "active"
                            ? "Tidak ada todo aktif"
                            : "Belum ada todo"}
                        </p>
                        )}

                        {/* map over and print items */}
                        {filteredList.map((item, index) => (
                                <ListGroup.Item
                                    key={item.id}
                                    variant="dark"
                                    style={{display:"flex",
                                            justifyContent:'space-between'
                                        }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={item.completed}
                                        onChange={() => toogleCompleted(item.id)}
                                        />
                                    <span 
                                        style={{
                                            textDecoration: item.completed 
                                            ? "line-through" 
                                            : "none",
                                            marginLeft: "8px",
                                        }}>
                                            {item.value} 
                                    </span>
                                    <span>
                                    <Button style={{marginRight:"10px"}}
                                    variant = "light"
                                    onClick={() => deleteItem(item.id)}>
                                        Delete
                                    </Button>
                                    <Button variant = "light"
                                    onClick={() => editItem(index)}>
                                        Edit
                                    </Button>
                                    </span>
                                </ListGroup.Item>
                            ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};


export default App;