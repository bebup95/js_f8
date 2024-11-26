// // Phương thức slice() là gì?
// Phương thức slice() tạo một bản sao hoặc trích xuất một phần của mảng ban đầu mà không làm thay đổi mảng ban đầu. Nó trả về một mảng mới chứa các phần tử được trích xuất từ mảng gốc.
// Cú pháp:
// array.slice(start, end);
// Cách sử dụng:
// slice(): Trích xuất toàn bộ mảng.
// slice(start): Trích xuất mảng bắt đầu từ chỉ số start đến cuối mảng.
// slice(start, end): Trích xuất một phần của mảng từ chỉ số start đến trước chỉ số end.

/* Phương thức splice() là gì?
Phương thức splice() được sử dụng để thêm hoặc loại bỏ các phần tử trong một mảng, 
nó hữu ích khi muốn thêm và loại bỏ phần tử tại bất kỳ vị trí nào trong mảng. 
Phương thức này sẽ sửa đổi vào mảng ban đầu.
Cú pháp:
array.splice(start, deleteCount, item1, item2, ...);
Ý nghĩa các tham số:
start: chỉ định vị trí bắt đầu thêm hoặc loại bỏ phần tử trong mảng. Nếu giá trị này là âm, start sẽ được tính từ cuối mảng, với -1 là phần tử cuối cùng của mảng.
deleteCount (tùy chọn): số lượng phần tử cần loại bỏ, bắt đầu từ vị trí start. Nếu deleteCount bị bỏ qua hoặc lớn hơn số phần tử còn lại từ vị trí start đến cuối mảng, thì tất cả các phần tử từ start đến cuối mảng sẽ bị loại bỏ. Nếu deleteCount là 0, phương thức này sẽ không xóa bất kỳ phần tử nào nhưng vẫn có thể thêm các phần tử mới vào mảng tại vị trí chỉ định.
item1, item2, ... (tùy chọn): các phần tử cần được thêm vào mảng, bắt đầu từ vị trí start. Nếu không có phần tử nào được thêm, splice() chỉ đơn giản loại bỏ các phần tử khỏi mảng.*/
