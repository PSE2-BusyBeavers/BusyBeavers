import { Clear, Search } from '@mui/icons-material'
import { Box, IconButton, Input, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { ISearchBarProps } from './types'

const Root = styled(Paper)(({ theme }) => ({
  height: theme.spacing(6),
  display: 'flex',
  justifyContent: 'space-between'
}))

const SearchContainer = styled(Box)(({ theme }) => ({
  margin: 'auto 16px',
  width: `calc(100% - ${theme.spacing(6 + 4)})`
}))

const IconButtonActive = styled(IconButton)(({ theme }) => ({
  color: theme.palette.action.active,
  // transform: "scale(1, 1)",
  transition: theme.transitions.create(['transform', 'color'], {
    duration: theme.transitions.duration.shorter,
    easing: theme.transitions.easing.easeInOut
  })
}))

const IconButtonHiddenStyle = {
  transform: 'scale(0, 0)',
  display: 'none',
  '& > $icon': {
    opacity: 0
  }
}

const SearchBar = React.forwardRef<HTMLInputElement, ISearchBarProps>(
  (
    {
      cancelOnEscape,
      closeIcon = <Clear />,
      disabled = false,
      onCancelSearch,
      onRequestSearch,
      searchIcon = <Search />,
      placeholder = 'Search',
      value: userDefinedValue,
      clearButtonOrder = 3,
      searchButtonOrder = 2,
      ...inputProps
    },
    ref
  ) => {
    const inputRef: React.MutableRefObject<HTMLInputElement> = React.useRef(
      {} as HTMLInputElement
    )
    const [value, setValue] = React.useState(userDefinedValue)

    React.useEffect(() => {
      setValue(userDefinedValue)
    }, [userDefinedValue])

    const handleFocus: React.FocusEventHandler<HTMLInputElement> = React.useCallback(
      e => {
        if (inputProps.onFocus) {
          inputProps.onFocus(e)
        }
      },
      [inputProps.onFocus]
    )

    const handleBlur: React.FocusEventHandler<HTMLInputElement> = React.useCallback(
      e => {
        setValue(v => v.trim())
        if (inputProps.onBlur) {
          inputProps.onBlur(e)
        }
      },
      [inputProps.onBlur]
    )

    const handleInput = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        inputProps.onChange && inputProps.onChange(e)
      },
      [inputProps.onChange]
    )

    const handleCancel = React.useCallback(() => {
      setValue('')
      onCancelSearch()
    }, [onCancelSearch])

    const handleRequestSearch = React.useCallback(() => {
      if (onRequestSearch) {
        onRequestSearch(value)
      }
    }, [onRequestSearch, value])

    const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = React.useCallback(
      e => {
        if (e.key === 'Enter') {
          handleRequestSearch()
        } else if (cancelOnEscape && e.key === 'Escape') {
          handleCancel()
        }
        if (inputProps.onKeyUp) {
          inputProps.onKeyUp(e)
        }
      },
      [handleRequestSearch, cancelOnEscape, handleCancel, inputProps.onKeyUp]
    )

    React.useImperativeHandle(ref, () => ({
      ...inputRef.current,
      focus: () => {
        inputRef.current.focus()
      },
      blur: () => {
        inputRef.current.blur()
      }
    }))

    return (
      <Root>
        <SearchContainer sx={{ order: 2 }}>
          <Input
            {...inputProps}
            inputRef={inputRef}
            onBlur={handleBlur}
            value={value}
            onChange={handleInput}
            onKeyUp={handleKeyUp}
            onFocus={handleFocus}
            disableUnderline
            disabled={disabled}
            placeholder={placeholder}
            fullWidth
          />
        </SearchContainer>
        <IconButtonActive
          role='searchButton'
          onClick={handleRequestSearch}
          disabled={disabled}
          sx={
            value == ''
              ? { order: searchButtonOrder }
              : { order: searchButtonOrder, ...IconButtonHiddenStyle }
          }
        >
          {searchIcon}
        </IconButtonActive>
        <IconButtonActive
          role='clearButton'
          onClick={handleCancel}
          sx={
            value != ''
              ? { order: clearButtonOrder }
              : { order: clearButtonOrder, ...IconButtonHiddenStyle }
          }
          disabled={disabled}
        >
          {closeIcon}
        </IconButtonActive>
      </Root>
    )
  }
)

export default SearchBar
