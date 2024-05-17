import React, { FC } from 'react'
import { ECountry } from '../../utils/typesFromBackend'
import { Select } from 'antd'

interface IChangeLanguage {
  t: (arg0: string) => string
  changeLanguage: (lng: ECountry) => void
}
const ChoiseLanguage: FC<IChangeLanguage> = ({ t, changeLanguage }) => {
  const [selectedOption, setSelectedOption] = React.useState('')
  const restData = Object.keys(ECountry)

  React.useEffect(() => {
    const storedLanguage = localStorage.getItem('language')
    if (
      storedLanguage &&
      Object.values(ECountry).includes(storedLanguage as ECountry)
    ) {
      setSelectedOption(storedLanguage)
      document.documentElement.setAttribute('lang', storedLanguage.toLocaleLowerCase())
      changeLanguage(storedLanguage as ECountry)
    }
  }, [])
  const onFinish = (values: string): void => {
    setSelectedOption(values)
    document.documentElement.setAttribute('lang', values.toLocaleLowerCase())
    changeLanguage(values as ECountry)
    localStorage.setItem('language', values)
  }

  return (
    <>
      {restData && Array.isArray(restData) ? (
        <>
          <Select
            id='my-select'
            value={selectedOption}
            onChange={(e) => onFinish(e)}
          >
            {restData.map((country) => (
              <Select.Option key={country} value={country}>
                {country}
              </Select.Option>
            ))}
          </Select>
        </>
      ) : (
        ''
      )}
    </>
  )
}
export default ChoiseLanguage
