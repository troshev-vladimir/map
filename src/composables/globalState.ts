import { reactive, readonly } from 'vue'

type GlobalState = {
  theme: string
}

const globalState = reactive<GlobalState>({
  theme: 'default',
})

export default function useState() {
  function setTheme(theme: string) {
    globalState.theme = theme
  }

  return {
    state: readonly(globalState),
    setTheme,
  }
}
