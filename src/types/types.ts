export interface ITodoItem {
    id: number;
    title: string;
    description?: string;
    priority?: 1 | 2 | 3;
    date: number;
    completed: boolean;
    subTodo?: ITodoItem;
}
