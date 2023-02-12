import * as React from "react";
import clsx from "clsx";
import { styled } from "@mui/system";
import { useSwitch } from "@mui/base/SwitchUnstyled";
import { useEffect, useState } from "react";

const SwitchRoot = styled("span")`
	display: inline-block;
	position: relative;
	width: 65px;
	height: 34px;
`;

const SwitchInput = styled("input")`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	opacity: 0;
	z-index: 1;
	margin: 0;
	cursor: pointer;
`;

const SwitchThumb = styled("span")(
	({ theme }) => `
  position: absolute;
  display: block;
  background-color: ${theme.palette.mode === "dark" ? "#1D1D1D" : "#fff"};
  width: 30px;
  height: 30px;
  border-radius: 16px;
  top: 2px;
  left: 5px;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:before {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
			"#EFBF13",
		)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>') center center no-repeat;
  }

  &.focusVisible {
    background-color: #79B;
  }

  &.checked {
    transform: translateX(24px);
		background-color:white;
    
    &:before {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
				"black",
			)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>');
    }
  }
`,
);

const SwitchTrack = styled("span")(
	({ theme }) => `
  background-color: ${theme.palette.mode === "dark" ? "#8796A5" : "#aab4be"};
  border-radius: 19px;
  width: 100%;
  height: 100%;
  display: block;
`,
);

function MUISwitch(props) {
	const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

	const stateClasses = {
		checked,
		disabled,
		focusVisible,
	};

	return (
		<SwitchRoot className={clsx(stateClasses)}>
			<SwitchTrack>
				<SwitchThumb className={clsx(stateClasses)} />
			</SwitchTrack>
			<SwitchInput {...getInputProps()} aria-label='Demo switch' />
		</SwitchRoot>
	);
}

export default function ThemeChanger() {
	const [bg, setBg] = useState("#fff");
	const [text, setText] = useState("#8444DF");
	const [normal, setNormal] = useState("black");
	const [border, setBorder] = useState("#8444DF");
	const [dark, setDark] = useState(false);

	useEffect(() => {
		document.documentElement.style.setProperty("--text-color", `${text}`);
		document.documentElement.style.setProperty(
			"--normal-text-color",
			`${normal}`,
		);
		document.documentElement.style.setProperty("--border-color", `${border}`);
		document.documentElement.style.setProperty("--bg-color", ` ${bg}`);
	}, [bg, border, normal, text]);

	useEffect(() => {
		if (dark) {
			setDark(true);
			setBg("#1D1D1D");
			setText("#08FDD8");
			setNormal("#fff");
			setBorder("#08FDD8");
		} else {
			setDark(false);
			setBg("#fff");
			setText("#8444DF");
			setNormal("black");
			setBorder("#8444DF");
		}
	}, [dark]);
	return (
		<MUISwitch
			onChange={(e) => {
				setDark(e.target.checked);
			}}
		/>
	);
}
