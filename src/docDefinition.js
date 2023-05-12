import instalImage from "./images/install.png";
const docDefinition = {
  content: [
    {
      text: "TÌM HIỂU VỀ PDFMAKE",
      style: "header",
      alignment: "center",
    },
    {
      text: "Phần I:  Giới thiệu về pdfmake.",
      style: "subheader",
    },

    { text: "1. Khái niệm.", fontSize: 13, lineHeight: 1.5 },
    {
      text: "pdfmake là một thư viện JavaScript mã nguồn mở được sử dụng để tạo và tùy chỉnh tệp PDF trong ứng dụng web. Nó cho phép bạn tạo ra các tài liệu PDF động bằng cách sử dụng mã JavaScript để xác định cấu trúc và nội dung của tài liệu.",
      fontSize: 13,
      lineHeight: 1.5,
    },
    ,
    {
      text: "Thư viện pdfmake giúp đơn giản hóa việc tạo và xuất tệp PDF từ các ứng dụng web mà không cần sử dụng các công cụ bên ngoài. Nó hỗ trợ cả trình duyệt và môi trường Node.js, cho phép bạn sử dụng nó trong cả các ứng dụng web và dịch vụ máy chủ. Với pdfmake, bạn có thể tạo các tệp PDF linh hoạt, ví dụ như báo cáo, hóa đơn, biểu mẫu, tài liệu hướng dẫn và nhiều loại tài liệu khác trong ứng dụng web của mình.",
      fontSize: 13,
      lineHeight: 1.5,
    },
    ,
    {
      text: "pdfmake là một thư viện JavaScript mã nguồn mở được sử dụng để tạo và tùy chỉnh tệp PDF trong ứng dụng web. Nó cho phép bạn tạo ra các tài liệu PDF động bằng cách sử dụng mã JavaScript để xác định cấu trúc và nội dung của tài liệu.",
      fontSize: 13,
      lineHeight: 1.5,
    },
    { text: "2. Ưu và nhược điểm.", fontSize: 13, lineHeight: 1.5 },
    {
        style: 'tableExample',
        table: {
            headerRows: 1,
            body: [
                [{text: 'Ư điểm', style: 'tableHeader'}, {text: 'Nhược điểm', style: 'tableHeader'}],
                [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                ]
            ]
        }
    },
    { qr: 'text in QR',margin: [ 0, 60, 0, 0 ]  },
  ],
  styles: {
    header: {
      fontSize: 18,
      bold: true,
      lineHeight: 2,
    },
    subheader: {
      fontSize: 16,
      bold: true,
      lineHeight: 1.5,
    },
    tableHeader: {

        bold: true,
        fontSize: 13,
        color: 'black',
        alignment: "center",
    }
  },
};

export default docDefinition;
