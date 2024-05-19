import '../../styles/components/pages/thankyou.scss'
import thankYouSVG from '../../assets/images/icon-thank-you.svg'

export function ThankYou() {
  return (
    <div className="page-container" id="thank-you-container">
      <img src={thankYouSVG}/>

      <h1>Thank you!</h1>

      <p className='page-desc'>
        Thanks for confirming your subscription!  We hope you have fun using our
        platform.  If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
</div>
  )
}
