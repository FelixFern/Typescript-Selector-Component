import { useState, useEffect } from 'react'
import styles from './select.module.scss'


type SelectOption = {
    label: string
    value: number 
}

type SelectProps = {
    options: SelectOption[]
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void
}

export const Select = ({value, onChange, options}: SelectProps) => {
    const [open, setOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)

    const clearOption = () => {
        onChange(undefined)
    }
    
    const selectOption = (option: SelectOption) => {
        if (option !== value) onChange(option)
    }

    const isSelected = (option: SelectOption) => {
        return option === value
    }
    
    useEffect(() => {
        if (open) {
            setHighlightedIndex(0)
        }
    }, [open])
    

    return (
        <div 
            tabIndex={0} 
            className={styles.container} 
            onClick={() => {setOpen(open => !open)}}
            onBlur={() => {setOpen(false)}}    
        >
            <span className={styles.value}>
                {value?.label}
            </span>
            <button 
                className={styles.clearBtn} 
                onClick={(e) => {
                    e.stopPropagation()
                    clearOption()
                }}
            >&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={`${styles.options} ${open ? styles.show : "" }`}>
                {options.map((option, index) => (
                    <li 
                        onMouseEnter={() => setHighlightedIndex(index)}
                        key={option.label} 
                        className={`
                            ${styles.option} 
                            ${isSelected(option) ? styles.selected : ""}
                            ${index === highlightedIndex ? styles.highlighted : ""}
                            
                            `}
                        onClick={(e) => {
                            e.stopPropagation()
                            selectOption(option)
                            setOpen(false)
                        }}
                    >
                        {option.label}
                    </li>
                ))}
                
                <li></li>

            </ul>
        </div>
    )
}
