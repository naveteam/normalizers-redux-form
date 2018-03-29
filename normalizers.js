export const normalizeDate = value => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 3) {
    return onlyNums
  }
  if (onlyNums.length <= 4) {
    return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2)}`
  }
  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}/${onlyNums.slice(4, 8)}`
}

export const normalizeCPF = value => {
if (!value) {
  return value
}
const onlyNums = value.replace(/[^\d]/g, '')
if (onlyNums.length <= 3) {
  return onlyNums
}
if (onlyNums.length <= 6) {
  return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3)}`
}
if (onlyNums.length <= 9) {
  return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(6, 9)}`
}
return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(6, 9)}-${onlyNums.slice(9, 11)}`
}

export const normalizeCRP = value => {
if (!value) {
  return value
}
const onlyNums = value.replace(/[^\d]/g, '')
if (onlyNums.length < 3) {
  return onlyNums
}
if (onlyNums.length <= 4) {
  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}`
}
return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 20)}`
}

export const normalizeCEP = value => {
if (!value) {
  return value
}
const onlyNums = value.replace(/[^\d]/g, '')

if (onlyNums.length <= 5) {
  return onlyNums;
}
if (onlyNums.length === 6) {
  return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 6)}`
}
return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 8)}`
}

//(99) 9 9999-9999
export const normalizePhone = value => {
if (!value) {
  return value
}
const onlyNums = value.replace(/[^\d]/g, '')
if (onlyNums.length < 3) {
  return '(' + onlyNums.slice(0, 2)
}
if (onlyNums.length < 4) {
  return '(' + onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2, 3)
}
if (onlyNums.length === 7) {
  return '(' + onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2) + '-'
}
if (onlyNums.length <= 2) {
  return onlyNums
}
if (onlyNums.length <= 8) {
  return '(' + onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2)
}

if (onlyNums.length === 10) {
  return '(' + onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2, 3) + ' ' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6, 10)
}
return '(' + onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2, 3) + ' ' + onlyNums.slice(3, 7) + '-' + onlyNums.slice(7, 11)
}

//9?9?9?9?9?9?9?9?9?9?9?9?9?9?
export const normalizeInternationalPhone = value => {
if (!value) {
  return value
}
const onlyNums = value.replace(/[^\d]/g, '')

return onlyNums.slice(0, 14);
}

//(99) 99999-9999
export const normalizeCellPhone = value => {
if (!value) {
  return value
}
const onlyNums = value.replace(/[^\d]/g, '')
if (onlyNums.length < 3) {
  return '(' + onlyNums.slice(0, 2)
}
if (onlyNums.length < 4) {
  return '(' + onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2, 3)
}

if (onlyNums.length <= 8) {
  return '(' + onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2)
}

if (onlyNums.length === 10) {
  return '(' + onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2, 3) + ' ' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6, 10)
}
return '(' + onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2, 3) + ' ' + onlyNums.slice(3, 7) + '-' + onlyNums.slice(7, 11)
}

//9999 9999 9999 9999
export const numberCreditCard = value => {
if (!value) {
  return value
}
const onlyNums = value.replace(/[^\d]/g, '')

if (onlyNums.length <= 16) {
  return onlyNums.match(/.{1,4}/g).join(' ')
}
}

//  mm/aa
export const overdueCreditCard = value => {
if (!value) {
  return value
}
const onlyNums = value.replace(/[^\d]/g, '')

if (onlyNums.length < 3) {
  return onlyNums;
}

if (onlyNums.length === 3) {
  return onlyNums.slice(0,2) + '/' + onlyNums.slice(2, 3);
}

if (onlyNums.length < 5) {
  return onlyNums.slice(0,2) + '/' + onlyNums.slice(2,4);
}
}

// 99999-D
export const bankAccount = value => {
if (!value) {
  return value;
}

const onlyNums = value.replace(/[^\d]/g, '')
if (onlyNums.length <= 5) {
  return onlyNums;
}

if (onlyNums.length < 12) {
  return onlyNums.slice(0, (onlyNums.length-1)) + '-' + onlyNums.slice(-1);
}
}

// 9999-D
export const bankAgency = value => {
if (!value) {
  return value;
}

const onlyNums = value.replace(/[^\d]/g, '')
if (onlyNums.length <= 4) {
  return onlyNums;
}

if (onlyNums.length < 6) {
  return onlyNums.slice(0, (onlyNums.length-1)) + '-' + onlyNums.slice(-1);
}
}

// 0,00
export const price = value => {
if (!value) {
  return value;
}
const onlyNums = value.replace(/[^\d]/g, '')
if (onlyNums.length <= 2) {
  return onlyNums;
}

if (onlyNums.length > 2) {
  return onlyNums.slice(0, (onlyNums.length-2)) + ',' + onlyNums.slice(-2);
}
}

// Conta BB e Santander
export const bb_santander_account = value => {
if (!value) {
  return value;
}

const onlyNums = value.replace(/[^\d]/g, '')
if (onlyNums.length < 1) {
  return Array(9).fill(0).map(i => i).join('')
}

if (onlyNums.length < 2) {
  return Array((9-(onlyNums.length))).fill(0).map(i => i).join('') + onlyNums.slice(0, 1);
}

if (onlyNums.length === 10 && onlyNums.length > 1) {
  return onlyNums.slice(1, 9) + '-' + onlyNums.slice(-1);
}

if (onlyNums.length < 10 && onlyNums.length > 1) {
  return onlyNums.slice(0, onlyNums.length-1) + '-' + onlyNums.slice(-1);
}
}

// Conta Bradesco
export const bradesco_account = value => {
if (!value) {
  return value;
}

const onlyNums = value.replace(/[^\d]/g, '')
if (onlyNums.length < 1) {
  return Array(8).fill(0).map(i => i).join('')
}

if (onlyNums.length < 2) {
  return Array((8-(onlyNums.length))).fill(0).map(i => i).join('') + onlyNums.slice(0, 1);
}

if (onlyNums.length === 9 && onlyNums.length > 1) {
  return onlyNums.slice(1, 8) + '-' + onlyNums.slice(-1);
}

if (onlyNums.length < 9 && onlyNums.length > 1) {
  return onlyNums.slice(0, onlyNums.length-1) + '-' + onlyNums.slice(-1);
}
}

// Conta Itaú
export const itau_account = value => {
if (!value) {
  return value;
}

const onlyNums = value.replace(/[^\d]/g, '')
if (onlyNums.length < 1) {
  return Array(6).fill(0).map(i => i).join('')
}

if (onlyNums.length < 2) {
  return Array((6-(onlyNums.length))).fill(0).map(i => i).join('') + onlyNums.slice(0, 1);
}

if (onlyNums.length === 7 && onlyNums.length > 1) {
  return onlyNums.slice(1, 6) + '-' + onlyNums.slice(-1);
}

if (onlyNums.length < 7 && onlyNums.length > 1) {
  return onlyNums.slice(0, onlyNums.length-1) + '-' + onlyNums.slice(-1);
}
}

// Conta Caixa
export const caixa_account = value => {
if (!value) {
  return value;
}

const onlyNums = value.replace(/[^\d]/g, '')
if (onlyNums.length < 1) {
  return Array(12).fill(0).map(i => i).join('')
}

if (onlyNums.length < 2) {
  return Array((12-(onlyNums.length))).fill(0).map(i => i).join('') + onlyNums.slice(0, 1);
}

if (onlyNums.length === 13 && onlyNums.length > 1) {
  return onlyNums.slice(1, 12) + '-' + onlyNums.slice(-1);
}

if (onlyNums.length < 13 && onlyNums.length > 1) {
  return onlyNums.slice(0, onlyNums.length-1) + '-' + onlyNums.slice(-1);
}
}