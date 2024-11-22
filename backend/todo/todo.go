package todo

var todos = make(map[int]Todo)
var nextID = 1

func CreateTodo(name string, class string, due_date string) Todo {
    todo := Todo{
        ID:        nextID,
        Name:      name,
		Class:	   class,
		DueDate:   due_date,
        Completed: false,
    }
    todos[nextID] = todo
    nextID++
    return todo
}

func GetAllTodos() []Todo {
    result := make([]Todo, 0, len(todos))
    for _, todo := range todos {
        result = append(result, todo)
    }
    return result
}

func GetTodoByID(id int) (Todo, bool) {
    todo, exists := todos[id]
    return todo, exists
}

func UpdateTodo(id int, completed bool) (Todo, bool) {
    todo, exists := todos[id]
    if !exists {
        return Todo{}, false
    }
    todo.Completed = completed
    todos[id] = todo
    return todo, true
}

func DeleteTodo(id int) bool {
    if _, exists := todos[id]; !exists {
        return false
    }
    delete(todos, id)
    return true
}