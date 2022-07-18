import If from "./If_helper"
import { Choose } from "./Choose_helper"

function AddTOCart() {
  return (
    <button>
      <If condition={stockStatus === "IN_STOCK"}>
        <If condition={loading}>
          <div>loading</div>
        </If>
        <If condition={!loading}>
          <Choose>
            <When condition={isAddedToCart && isLoggedIn}>
              <>
                <span> View Bag:</span>
                <span> $ {Math.round(groundTotal)}</span>
              </>
            </When>
            <When condition={isAddedToCart && !isLoggedIn}>
              <span>Login to view bad</span>
            </When>
            <Otherwise>
              <div>Add to Bag</div>
            </Otherwise>
          </Choose>
        </If>
      </If>
      <If condition={(stockStatus = "OUT_OF_STOCK")}>
        <div>OUT OF STOCK</div>
      </If>
    </button>
  );
}
