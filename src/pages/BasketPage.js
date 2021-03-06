import React, { Fragment, useContext } from 'react'
import BasketList from '../components/Basket/BasketList'
import { GlobalContext } from '../context/GlobalContext'

export default function BasketPage() {
  const context = useContext(GlobalContext)
  const renderBasketList = () =>
    context.basketGoods.length ? (
      <Fragment>
        <BasketList />
        <button className="btn btn-danger mt-2" onClick={context.clearBasket}>
          Clear
        </button>
      </Fragment>
    ) : null

  return (
    <Fragment>
      <h3 className="text-center">Total: {context.totalSum}$</h3>
      {renderBasketList()}
    </Fragment>
  )
}
