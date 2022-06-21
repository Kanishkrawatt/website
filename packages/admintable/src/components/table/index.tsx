import './Dashboard.css'
import { cols } from '../../pages/Config'
import { IUser } from '../../utils/interfaces'
import { useTable, useSortBy } from 'react-table'
import { useAuth } from '../../context/AuthContext'
import { getTableData } from '../../utils/firebase'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'

const TableContainer = () => {
  const [data, setData] = useState<IUser[] | []>([])

  const { user } = useAuth()
  const getData = useCallback(async () => {
    const data = await getTableData(user)
    setData(data ?? [])
  }, [user])

  const columns = useMemo(() => cols, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<any>({ columns, data }, useSortBy)

  useEffect(() => {
    getData()
  }, [getData])
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                onClick={() => {
                  ;(column as any).toggleSortBy()
                }}
              >
                {column.render('Header')}
                <span>
                  {(column as any).isSorted ? (
                    (column as any).isSortedDesc ? (
                      <CaretDownOutlined />
                    ) : (
                      <CaretUpOutlined />
                    )
                  ) : null}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                if (cell.column.id === 'photoURL') {
                  return (
                    <td>
                      <img
                        src={cell.value}
                        alt={cell.column.id}
                        width={75}
                        height={75}
                      />
                    </td>
                  )
                }
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableContainer
