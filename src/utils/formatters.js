// import {ref} from 'vue'

function formatDate(date) {
  console.log({date})
  const aceptNumbers = date.replace(/\D/g, '')
  const month = aceptNumbers.slice(0, 2)
  const day = aceptNumbers.slice(2, 4)


  return `${month}/${day}`
}

export { formatDate }
