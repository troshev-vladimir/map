interface Todo {
  title: string
  description: string
  completed: boolean
}

// interface Todo {
// some: string
// }

type Brand<T, B extends string> = T & { _brand: B }

const todo = {
  title: 'string',
  description: 'string',
  completed: false,
}

// enum работает не по структурной типизации, а по фактической
// const enum не доступен в runtime, но доступен в compile-time
const enum TodoStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

// лучше использовать const object
const TodoStatus2 = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
} as const
type TodoStatus2 = (typeof TodoStatus2)[keyof typeof TodoStatus2]

function getTodoStatus(todo: TodoStatus) {
  switch (todo) {
    case TodoStatus.TODO:
      return 'TODO'
    case TodoStatus.IN_PROGRESS:
      return 'IN_PROGRESS'
    case TodoStatus.DONE:
      return 'DONE'
    default:
      const _exhaustiveCheck: never = todo
      return 'UNKNOWN'
  }
}

type CustomOmit<T, K extends keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key]
}

function isTodo(obj: unknown): asserts obj is Todo {
  // return (obj as Todo).completed !== undefined

  if ((obj as Todo).completed === undefined) {
    throw new Error('not a todo')
  }
}

const adf = isTodo(todo)
console.log(adf)

// ====================== Branded types
const stringExample = 'asdfadsf' as Brand<string, 'String'>
function asdfad(a: Brand<string, 'String'>) {
  console.log(a)
  return todo
}
asdfad(stringExample)
// ====================== Branded types

// ====================== Infer
type MyReturnType<T> = T extends (...rest: never[]) => infer ReturnType ? ReturnType : never
type MyParamsType<T> = T extends (...args: infer ParamsType) => unknown ? ParamsType : never
type MyExclude<T, U> = T extends U ? never : T
const returd: MyParamsType<typeof asdfad>[0] = 'asdf' as Brand<string, 'String'>
// // ====================== Infer

type Omitted = Omit<Todo, 'title'>
type Picked = Pick<Todo, 'title'>
type Excluded = Exclude<keyof Todo, 'title'>
type Extracted = Extract<keyof Todo, 'title' | 'completed'>

function sdf() {
  return new Promise<string>((resolve) => {
    resolve('asdf')
  })
}

type Aw = Awaited<ReturnType<typeof sdf>>

type str = 'asdfsdf' | '23123fsdf'
type Asdasd<T> = T extends `asd${infer S}` ? S : T
type ASD = Asdasd<str>

const str = 'asdfadsf' as unknown as number

const todo2 = {
  title: 'string',
  description: 'string',
  // asdasd: 'string',
} as Todo

const todo3 = {
  title: 'string',
  description: 'string',
  completed: false,
} satisfies Todo

function keys<T extends object>(t: T) {
  return Object.keys(t) as Array<keyof T>
}

const keysOfTodo = keys(todo3)

// ----------------function overload
function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d)
  } else {
    return new Date(mOrTimestamp)
  }
}
const d1 = makeDate(12345678)
const d2 = makeDate(5, 5, 5)
// const d3 = makeDate(1, 1) // error
// ----------------function overload
interface DB {
  filterTodos(filter: (this: Todo) => boolean): Todo[]
}

const db: DB = {
  filterTodos: function (this: Todo[], filter) {
    return this.filter(filter)
  },
}

const onlyCompleted = db.filterTodos(function () {
  return this.completed
})
