package todo

type Todo struct {
    ID          int     `json:"id"`
    Name        string  `json:"name"`
    Class       string  `json:"class"`
    DueDate     string  `json:"due_date"`
    Completed   bool    `json:"completed"`
}