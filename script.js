$(document).ready(function () {
    $('#taxForm').submit(function (event) {
        event.preventDefault();

        const grossIncome = parseFloat($('#grossIncome').val());
        const extraIncome = parseFloat($('#extraIncome').val());
        const deductions = parseFloat($('#deductions').val());
        const ageGroup = $('#ageGroup').val();

        let tax = 0;
        if (grossIncome + extraIncome - deductions > 800000) {
            const taxableIncome = grossIncome + extraIncome - deductions - 800000;
            switch (ageGroup) {
                case '<40':
                    tax = 0.3 * taxableIncome;
                    break;
                case '>=40&<60':
                    tax = 0.4 * taxableIncome;
                    break;
                case '>=60':
                    tax = 0.1 * taxableIncome;
                    break;
                default:
                    break;
            }
        }

        $('#modalBody').html(`<h4>Your overall income will be </h4> ${tax.toFixed(2)} <p> after tax deductions</p>`);
        $('#resultModal').modal('show');
    });
});