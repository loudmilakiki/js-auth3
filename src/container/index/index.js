document.addEventListener('DOMContentLoaded', () => {
  if (window.session) {
    const { user } = window.session

    if (user.isConfirm) {
      location.assign('/home')
    } else {
      location.assign('/signup-confirm') //підтвердження регістрації
    }
  } else {
    location.assign('/signup')
  }
})
