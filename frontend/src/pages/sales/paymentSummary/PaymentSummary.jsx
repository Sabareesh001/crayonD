import { useEffect, useState } from 'react'
import './PaymentSummary..css'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import Button from '../../../../components/button/Button';
import { blue } from '@mui/material/colors';
const PaymentSummary = ()=>{
    const [paymentSummaryData,setPaymentSummaryData] = useState(
        [
           [ {
                label:"Sub Total",
                amount:1050.00
            },
            {
                label:"Taxable Amount",
                amount:1000.00
            },
            {
                label:"Total Tax",
                amount:50.00
            }]
        ]
    )
    const [grandTotal,setGrandTotal] = useState(0.00);
    useEffect(()=>{
        let total = 0.00;
       paymentSummaryData.forEach((summary)=>{
          total += summary.find((data)=>{
            return(
                data.label === "Sub Total"
            )
           }).amount
       })
       setGrandTotal(total)
    },[paymentSummaryData])
    return(
        <div className='paymentSummaryContainer'>
          <div className='paymentSummaryCollectionContainer'>
             <div>
                <p className='paymentSummaryTitle'>
                   Payment summary
                </p>
                <p className='userName'>
                    <ReceiptOutlinedIcon/>
                    Ashwin
                </p>
             </div>
            { paymentSummaryData.map((summary)=>{

                return(
                         summary.map((data)=>{
                        return(
                            <div>

                             <p>
                                {data.label}
                             </p>
                             <p className='amount'>
                                SAR {data.amount.toFixed(2)}
                             </p>
            
                             </div>

                           
                             )
                    })
                   
                )
            
            })
            }
            <hr></hr>
            <div>
                <p>
                   Grand Total
                </p>
                <p className='amount'>
                   SAR {grandTotal.toFixed(2)}
                </p>
             </div>
          </div>

          <div className='paymentSummaryActionsContainer'>
                <div className='addNoteContainer'>
                
                            <div className='addNote'>
                                <NoteAddOutlinedIcon/>
                                Add Note
                            </div>
                  
                </div>
                <div className='offersContainer'>
           
                    <Button  type='outlined' content={
                        <div className='offerIcons'>
                                 <AccountBoxOutlinedIcon/>
                                 Customer
                            </div>
                    } />
                        <Button type='outlined'  content={
                        <div className='offerIcons'>
                        <ConfirmationNumberOutlinedIcon/>
                        Coupon
                      </div>
                    } />
                        <Button type='outlined' content={
                        <div className='offerIcons'>
                        <PercentOutlinedIcon/>
                        Discount
                    </div>
                    } />
                    
                   
                </div>
                <div className='printContainer'>
                    <div className='printButton'>
                    <Button
                    type='outlined'
                    color={"#3161d5"}
                     content={
                        <div className='offerIcons'>
                        <LocalPrintshopOutlinedIcon/>
                        Print Bill
                    </div>
                     }
                    />
                    </div>
                    <div className='proceedToPayment'>
                    <Button
                    type='filled'
                    fillColor={"#3161d5"}
                    color={"white"}
                     content={
                        <div className='offerIcons'>
                        Proceed to payment
                    </div>
                     }
                    />
                    </div>
                </div>
          </div>

        </div>
    )
}

export default PaymentSummary