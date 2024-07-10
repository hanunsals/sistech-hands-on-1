//button 
function changeStatus(button, status) {
    var row = button.parentNode.parentNode;
    var statusCell = row.querySelector('.status');
    statusCell.innerText = status;
    if (status === 'Accepted') {
        statusCell.classList.remove('rejected');
        statusCell.classList.add('accepted');
        row.querySelector('.acceptButton').style.backgroundColor = '#315E99'; // Ubah warna tombol Accept menjadi biru
        row.querySelector('.rejectButton').style.backgroundColor = ''; // Kembalikan warna tombol Reject menjadi default
        row.querySelector('.acceptButton').style.color = 'white'; // Ubah warna font tombol Accept menjadi putih
        row.querySelector('.rejectButton').style.color = ''; // Kembalikan warna font tombol Reject menjadi default
    } else if (status === 'Rejected') {
        statusCell.classList.remove('accepted');
        statusCell.classList.add('rejected');
        row.querySelector('.rejectButton').style.backgroundColor = '#9095A0'; // Ubah warna tombol Reject menjadi abu-abu
        row.querySelector('.acceptButton').style.backgroundColor = ''; // Kembalikan warna tombol Accept menjadi default
        row.querySelector('.rejectButton').style.color = 'white'; // Ubah warna font tombol Reject menjadi putih
        row.querySelector('.acceptButton').style.color = ''; // Kembalikan warna font tombol Accept menjadi default
    }
}

//card course
function blurImage(element) {
    element.querySelector('img').classList.add('blur');
}

function unblurImage(element) {
    element.querySelector('img').classList.remove('blur');
}

