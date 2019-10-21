import React from "react";
import styled from "styled-components";
import { withThemeColor } from "../higherorder/stylehoc";
import withDisplay from "../higherorder/displayhoc";
import PropTypes from "prop-types";

const FileWrapper = styled.div.attrs(({fileName, right, styleName}) => ({
	className: `file${fileName ? ` has-name`: ``}${right ? ` is-right`:``}${styleName ? ` is-${styleName}` : ``}`
}))``;

const FileLabel = styled.label.attrs(() => ({
	className: `file-label`
}))``;

const FileLabelSpan = styled.span.attrs(() => ({
	className: `file-label`
}))``;

const FileInput = styled.input.attrs(({name}) => ({
	className: `file-input`,
	type: `file`,
	name: name
}))``;

const FileCTA = styled.span.attrs(() => ({
	className: 'file-cta'
}))``;

const FileIcon = styled.span.attrs(() => ({
	className: `file-icon`
}))``;

const FileName = styled.span.attrs(() => ({
	className: `file-name`
}))``;

const File = withDisplay(withThemeColor(({label, icon, name, fileName, right}) => {
	return (
		<FileWrapper fileName={fileName} right={right}>
			<FileLabel>
				<FileInput name={name}/>
				<FileCTA>
					{icon &&
						<FileIcon>
							{icon()}
						</FileIcon>
					}
					<FileLabelSpan>
						{label}
					</FileLabelSpan>
					{fileName &&
						<FileName>
							{fileName}
						</FileName>
					}
				</FileCTA>
			</FileLabel>
		</FileWrapper>
	)
}));

File.propTypes = {
	label: PropTypes.string.isRequired,
	icon: PropTypes.func,
	name: PropTypes.string.isRequired,
	fileName: PropTypes.string
};

export default File;