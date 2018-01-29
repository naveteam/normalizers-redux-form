# Normalizers for redux-form

example:
```jsx

import { normalizeCPF } from './normalizers' 

<Field
  component="input"
  name="cpf"
  normalizer={normalizeCPF}
  type="text"
/>
```

output: `123.456.789-10`
