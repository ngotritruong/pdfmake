import logoHDBank from "./images/jdidk.jpg";
const docDefinition = {
  info: {
    title: "PDFMake",
    author: "Jack",
    subject: "HDBank",
    keywords: "HDBank",
  },
  pageSize: "A4",
  // watermark: {
  //   text: "HDBank",
  //   color: "orange",
  //   opacity: 0.3,
  //   bold: true,
  //   italics: false,
  //   fontSize: 55,
  // },
  pageMargins: [20, 20, 20, 20],
  content: [
    {
      columns: [
        {
          image: logoHDBank, // Đường dẫn đến hình ảnh
          width: 100, // Chiều rộng của hình ảnh
          margin: [0, -5, 0, 0],
        },
        {
          width: 350,
          text: [
            { text: "GIẤY NỘP TIỀN\n", bold: true },
            { text: "CASH DEPOSIT SLIP\n", italics: true },
            { text: "Ngày", bold: true },
            { text: "/Date: 12/05/2023", italics: true },
          ],
          alignment: "center",
        },
        {
          width: 230,
          text: [
            { text: "Số GD:", bold: true },
            { text: "TL_HD888882/583\n", italics: true },
            { text: "Transaction No.\n", italics: true },
            { text: "TK Có:", bold: true },
            { text: "225704070001023\n", italics: true },
          ],
        },
      ],
    },
    {
      columns: [
        {
          width: 320,
          text: [
            { text: "HDBank:", bold: true },
            { text: "  CN PHÚ NHUẬN\n", italics: true },
            { text: "Người nộp tiền/", bold: true },
            { text: "Depositor:", italics: true },
            { text: "SLVAI-00007399\n", italics: true, bold: true },
            { text: "CMND/HC/", bold: true },
            { text: "ID/PP No: 325515470\n", italics: true },
            { text: "Nơi cấp/", bold: true },
            { text: "Place of issue: CXOIXL\n", italics: true },
            { text: "Địa chỉ/", bold: true },
            { text: "Address: 25 BISS\n", italics: true },
            { text: "Tên tài khoản ghi có/", bold: true },
            { text: "Name of Account: rltcvr\n", italics: true },
            { text: "Số tài khoản/", bold: true },
            { text: "Account No:\n", italics: true },
            { text: "Số tiền bằng chữ/", bold: true },
            { text: "Amount in words: Năm mươi triệu pound\n", italics: true },
            { text: "Nội dung/", bold: true },
            { text: "Details: GBP.VND 12052023\n", italics: true },
          ],
        },
        {
          stack: [
            {
              columns: [
                {
                  heights: [30],
                  table: {
                    widths: [120],
                    body: [
                      [
                        {
                          border: [false, false, true, true],
                          text: "225704070001023", lineHeight: 1.25,  bold: true, italics: true,alignment: "center",
                        },
                      ],
                    ],
                  },
                  margin: [-220, 80, 0, 0],
                  layout: {
                    defaultBorder: false,
                  },
                },
              ],
            },
          ],
        },
        {
          width: 240,
          text: [
            "\n",
            { text: "Điện thoại/", bold: true },
            { text: "Phone No: 0908000350\n", italics: true },
            { text: "Ngày cấp/", bold: true },
            { text: "Date of issue: 01/12/2018\n", italics: true },
            { text: "Quốc gia/", bold: true },
            { text: "Nation: VIET NAM\n", italics: true },
            { text: "Loại tài khoản/", bold: true },
            { text: "Account type: 710\n", italics: true },
            { text: "Loại tiền/", bold: true },
            { text: "Currency:\n", italics: true },
            { text: "Bằng số/", bold: true },
            { text: "In figures:\n", italics: true },
            { text: "Q.đổi/", bold: true },
            { text: "Equiv(rate):", italics: true },
            { text: "1,380,000,000,000VND (TG 27.600)\n", bold: true },
            "\n",
          ],
        },
        {
          stack: [
            {
              columns: [
                {
                  heights: [30],
                  table: {
                    widths: [120],
                    body: [
                      [
                        {
                          border: [false, false, true, true],
                          text: "50,000,000 GBP",lineHeight: 1.25, bold: true, italics: true,alignment: "right",
                        },
                      ],
                    ],
                  },
                  margin: [-160, 78, 0, 0],
                  layout: {
                    defaultBorder: false,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      columns: [
        [
          {
            text: [
              { text: "Họ tên, chữ ký người nộp tiền/", bold: true },
              { text: "Full name, signature of Depositor\n", italics: true },
            ],
            margin: [5, 0, 10, 0],
            lineHeight: 1,
          },
          {
            margin: [5, 0, 7, 5],
            widths: 310,
            table: {
              heights: 64,
              widths: ["*"],
              body: [[""]],
            },
          },
          {
            widths: 310,
            margin: [5, 2, 7, 20],
            table: {
              widths: ["*", "*", "*"],
              heights: ["auto", 94],

              body: [
                [
                  {
                    colSpan: 3,
                    text: [
                      { text: "Phần dành cho Ngân hàng/", bold: true },
                      { text: "For Bank use only", italics: true },
                    ],
                    alignment: "center",
                    border: [true, true, true, false],
                  },
                  "",
                  "",
                ],

                [
                  [
                    {
                      text: "Giao dịch viên\n",
                      bold: true,
                      alignment: "center",
                      border: [true, true, true, false],
                    },
                    { text: "Teller\n", italics: true, alignment: "center" },
                  ],
                  [
                    {
                      text: "Giao dịch viên\n",
                      bold: true,
                      alignment: "center",
                    },
                    { text: "Teller\n", italics: true, alignment: "center" },
                  ],
                  [
                    {
                      text: "Giao dịch viên\n",
                      bold: true,
                      alignment: "center",
                    },
                    { text: "Teller\n", italics: true, alignment: "center" },
                  ],
                ],
                [
                  [
                    {
                      text: "Nguyễn Văn A2\n",
                      bold: true,
                      alignment: "center",
                    },
                  ],
                  [
                    {
                      text: "Nguyễn Văn A3\n",
                      bold: true,
                      alignment: "center",
                    },
                  ],
                  [""],
                ],
              ],
            },

            layout: {
              hLineWidth: function (i, node) {
                return i === 0 || i === node.table.body.length ? 2 : 1;
              },
              vLineWidth: function (i, node) {
                return i === 0 || i === node.table.widths.length ? 2 : 1;
              },
              hLineColor: function (i, node) {
                return i === 0 || i === node.table.body.length
                  ? "gray"
                  : "white";
              },
              vLineColor: function (i, node) {
                return i === 0 || i === node.table.widths.length
                  ? "gray"
                  : "white";
              },
            },
          },
        ],
        {
          width: 240,
          margin: [5, 2, 0, 20],
          table: {
            widths: ["*", "auto", "auto"],
            heights: ["auto", "auto", 150, "auto"],
            // keepWithHeaderRows: 1,
            body: [
              [
                { text: "Header 1", alignment: "center" },
                { text: "Header 2", alignment: "center" },
                { text: "Header 3", alignment: "center" },
              ],
              ["Sample value 1", "Sample value ", "Sample value "],
              [{ rowSpan: 3, colSpan: 3, text: "" }],
              ["", "", ""],
              ["", "", ""],
              ["Sample value 1", { colSpan: 2, text: "" }, ""],
            ],
          },
        },
      ],
    },
    
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
      color: "black",
      alignment: "center",
    },
  },
  defaultStyle: {
    fontSize: 8,
    lineHeight: 1.5,
  },
};

export default docDefinition;
