export type Todo = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    priority: 1 | 2 | 3 | 4;
    subTodo: Todo[];
}

export type TodoState = {
    list: Todo[];
}