import { CartItemDTO } from "@/shared/services/dto/cart-dto"

export interface OrderSuccessProps {
  orderId: number
  fullName: string
  items: CartItemDTO[]
  orderDate: Date
  totalAmount: number
}

// Абсолютный URL для картинок — замени на свой домен
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dodoco-pizza.ru"

export function OrderSuccessTemplate({
  orderId,
  totalAmount,
  fullName,
  items,
  orderDate,
}: OrderSuccessProps) {
  return (
    <table
      width="100%"
      cellPadding={0}
      cellSpacing={0}
      style={{
        backgroundColor: "#1a1a2e",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <tr>
        <td align="center" style={{ padding: "48px 16px" }}>
          {/* Основной контейнер */}
          <table
            width="560"
            cellPadding={0}
            cellSpacing={0}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            {/* Логотип */}
            <tr>
              <td align="center" style={{ padding: "32px 32px 16px" }}>
                <img
                  src={`${BASE_URL}/dodocoLogo.png`}
                  alt="DoDoCo Pizza"
                  width={140}
                  style={{ border: "none", display: "block" }}
                />
              </td>
            </tr>

            {/* Заголовок */}
            <tr>
              <td style={{ padding: "0 32px 16px" }}>
                <h1
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#e43921",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  Ваш заказ в DoDoCo Pizza подтверждён!
                </h1>
              </td>
            </tr>

            {/* Разделитель */}
            <tr>
              <td style={{ padding: "0 32px" }}>
                <hr
                  style={{
                    border: "none",
                    borderTop: "1px solid #e5e7eb",
                    margin: 0,
                  }}
                />
              </td>
            </tr>

            {/* Приветствие */}
            <tr>
              <td style={{ padding: "16px 32px" }}>
                <p style={{ fontSize: "16px", color: "#374151", margin: 0 }}>
                  <span style={{ fontSize: "18px", fontWeight: 600 }}>
                    Здравствуйте, {fullName}!
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0 32px 16px" }}>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#4b5563",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Ваш заказ успешно оформлен и уже готовится. Спасибо, что
                  выбрали нас!
                </p>
              </td>
            </tr>

            {/* Разделитель */}
            <tr>
              <td style={{ padding: "0 32px" }}>
                <hr
                  style={{
                    border: "none",
                    borderTop: "1px solid #e5e7eb",
                    margin: 0,
                  }}
                />
              </td>
            </tr>

            {/* Детали заказа */}
            <tr>
              <td style={{ padding: "16px 32px" }}>
                <table cellPadding={0} cellSpacing={0}>
                  <tr>
                    <td
                      style={{
                        fontSize: "14px",
                        color: "#4b5563",
                        paddingBottom: "4px",
                      }}
                    >
                      Номер заказа:{" "}
                      <span style={{ fontWeight: 600 }}>#{orderId}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "14px", color: "#4b5563" }}>
                      Дата создания: {orderDate.toDateString()}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            {/* Разделитель */}
            <tr>
              <td style={{ padding: "0 32px" }}>
                <hr
                  style={{
                    border: "none",
                    borderTop: "1px solid #e5e7eb",
                    margin: 0,
                  }}
                />
              </td>
            </tr>

            {/* Состав заказа */}
            <tr>
              <td style={{ padding: "16px 32px" }}>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#111827",
                    margin: "0 0 12px",
                  }}
                >
                  Состав заказа:
                </h3>

                <table
                  width="100%"
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ borderCollapse: "collapse" }}
                >
                  {items.map((item) => (
                    <tr
                      key={item.id}
                      style={{ borderBottom: "1px dotted #d1d5db" }}
                    >
                      <td
                        style={{
                          padding: "8px 0",
                          fontSize: "14px",
                          color: "#374151",
                        }}
                      >
                        {item.productItem.product.name}
                        <span style={{ color: "#9ca3af", margin: "0 4px" }}>
                          |
                        </span>
                        {item.productItem.price}₽
                        <span style={{ color: "#9ca3af", margin: "0 4px" }}>
                          |
                        </span>
                        x{item.quantity} шт.
                      </td>
                      <td
                        align="right"
                        style={{
                          padding: "8px 0",
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#111827",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.productItem.price * item.quantity} ₽
                      </td>
                    </tr>
                  ))}

                  {/* Итого */}
                  <tr>
                    <td colSpan={2} style={{ padding: "12px 0 0" }}>
                      <hr
                        style={{
                          border: "none",
                          borderTop: "2px solid #e5e7eb",
                          margin: 0,
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "8px 0",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#111827",
                      }}
                    >
                      Итого:
                    </td>
                    <td
                      align="right"
                      style={{
                        padding: "8px 0",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#e43921",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {totalAmount} ₽
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            {/* Футер */}
            <tr>
              <td
                align="center"
                style={{
                  padding: "24px 32px 32px",
                  fontSize: "12px",
                  color: "#9ca3af",
                }}
              >
                DoDoCo Pizza © {new Date().getFullYear()}
                <br />
                Если у вас есть вопросы, напишите нам на{" "}
                <a
                  href="mailto:info@dodoco-pizza.ru"
                  style={{ color: "#e43921" }}
                >
                  info@dodoco-pizza.ru
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  )
}
