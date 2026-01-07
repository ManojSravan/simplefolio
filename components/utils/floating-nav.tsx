/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
  
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function floatingButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"free-discovery-call"});
      cal("floatingButton", {"calLink":"manoj-sravan-annivg/free-discovery-call","config":{"layout":"month_view"}});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
};
  