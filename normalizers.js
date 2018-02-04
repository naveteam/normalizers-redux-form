// dd/mm/yyyy
export const DATE = value => {
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

// 123.456.789-10
export const CPF = value => {
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

// Conselho regional de psicologia
// 123/123456789
export const CRP = value => {
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

// 123456-789
export const CEP = value => {
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
export const PHONE = value => {
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
export const INTERNATIONAL_PHONE = value => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')

  return onlyNums.slice(0, 14);
}

//(99) 99999-9999
export const CELLPHONE = value => {
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
    return '(' + onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2, 6) + '-' + onlyNums.slice(6, 10)
  }
  return '(' + onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2, 7) + '-' + onlyNums.slice(7, 11)
}

//9999 9999 9999 9999
export const NUMBER_CREDIT_CARD = value => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')

  if (onlyNums.length <= 16) {
    return onlyNums.match(/.{1,4}/g).join(' ')
  }
}

//  mm/aa
export const OVERDUE_CREDIT_CARD = value => {
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

// 99999-9
export const BANK_ACCOUNT = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 5) {
    return onlyNums;
  }

  if (onlyNums.length < 7) {
    return onlyNums.slice(0,5) + '-' + onlyNums.slice(5, 7);
  }
}

// 1234-56
export const BANK_AGENCY = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 4) {
    return onlyNums;
  }

  if (onlyNums.length < 6) {
    return onlyNums.slice(0,4) + '-' + onlyNums.slice(4, 6);
  }
}