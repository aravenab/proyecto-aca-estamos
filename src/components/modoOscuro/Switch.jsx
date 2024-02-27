import { useTheme } from "../../../src/hook/useTheme";
import React from 'react'

const Switch = () => {
    
    const [theme, handleChange] = useTheme('dark');

    return (
		<div className="container-switch">
			<span> </span>

			<label className="switch">
				<input  className="bb8-toggle__checkbox" type="checkbox" onChange={handleChange} checked={theme === 'dark'}/> 
					<span className="slider"></span>
			</label>

	
		</div>
	)
}


export default Switch
