import swal from 'sweetalert2'

const swalWithBootstrapButtons = swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary',
    cancelButton: 'btn btn-secondary mr-5',
  },
  buttonsStyling: false
})

export default class NotificationService {

  /**
   * 
   * @param {string?} text 
   */
  static async confirmAction(text = "You won't be able to revert this!") {
    try {
      let config = {
        title: 'Are you sure?',
        text,
        type: 'warning',
        width: 600,
        padding: '3em',
        showCancelButton: true,
        confirmButtonText: 'Yes, do it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }
      let result = await swalWithBootstrapButtons.fire(config)
      return result.value
    } catch (e) {
      return false
    }
  }
}