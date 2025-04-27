interface Todo {
  title: string
  description: string
  completed: boolean
}

type Brand<T, B extends string> = T & { _brand: B }

const todo = {
  title: 'string',
  description: 'string',
  completed: false,
}

type CustomOmit<T, K extends keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key]
}

function isTodo(obj: unknown): obj is Todo {
  return (obj as Todo).completed !== undefined
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
type Exclude<T, U> = T extends U ? never : T
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
