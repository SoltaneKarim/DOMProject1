// Helper to update total price
function updateTotal() {
  let total = 0;
  document.querySelectorAll('.card-body').forEach(cardBody => {
    const priceText = cardBody.querySelector('.unit-price');
    const quantitySpan = cardBody.querySelector('.quantity');
    if (priceText && quantitySpan) {
      const price = parseInt(priceText.textContent);
      const quantity = parseInt(quantitySpan.textContent);
      total += price * quantity;
    }
  });
  document.querySelector('.total').textContent = `${total} $`;
}

// Handle plus/minus buttons
document.querySelectorAll('.fa-plus-circle').forEach(btn => {
  btn.addEventListener('click', function () {
    const quantitySpan = this.parentElement.querySelector('.quantity');
    quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
    updateTotal();
  });
});

document.querySelectorAll('.fa-minus-circle').forEach(btn => {
  btn.addEventListener('click', function () {
    const quantitySpan = this.parentElement.querySelector('.quantity');
    let qty = parseInt(quantitySpan.textContent);
    if (qty > 0) {
      quantitySpan.textContent = qty - 1;
      updateTotal();
    }
  });
});

// Handle delete (trash) button
document.querySelectorAll('.fa-trash-alt').forEach(btn => {
  btn.addEventListener('click', function () {
    // Remove the product card
    const cardBody = this.closest('.card-body');
    cardBody.remove();
    updateTotal();
  });
});

// Handle like (heart) button
document.querySelectorAll('.fa-heart').forEach(btn => {
  btn.addEventListener('click', function () {
    this.classList.toggle('liked');
    // Toggle color (red if liked)
    if (this.classList.contains('liked')) {
      this.style.color = 'red';
    } else {
      this.style.color = '';
    }
  });
});

// Initial total
updateTotal();