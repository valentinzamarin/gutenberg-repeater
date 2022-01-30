import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	Button,
	TextControl,
	IconButton,
} = wp.components;

const {
	Fragment,
} = wp.element;

registerBlockType( 'cgb/block-gutenberg-repeater', {
	title: __( 'gutenberg-repeater' ),
	icon: 'list-view',
	category: 'common',
	keywords: [
		__( 'gutenberg-repeater' ),
	],
	attributes: {
		repeater: {
			type: 'array',
			default: [],
		},
	},

	edit: ( props ) => {
		const handleAddField  = () => {
			const repeater = [ ...props.attributes.repeater ];
			repeater.push( {
				item: '',
			} );
			props.setAttributes( { repeater } );
		}

		const handleChangeField = ( item, idx ) => {
			const repeater = [ ...props.attributes.repeater ];
			repeater[ idx ].item = item;
			props.setAttributes( { repeater } );
		}

		const handleRemoveItem = ( idx ) => {
			const repeater = [ ...props.attributes.repeater ];
			repeater.splice( idx, 1 );
			props.setAttributes( { repeater } );
		}

		let repeaterField;
		if( props.attributes.repeater.length ) {
			repeaterField = props.attributes.repeater.map( ( repeater, idx ) => {
				return <Fragment key={ idx }>
					<div className="repeater-item">
						<TextControl
							placeholder={ __( 'Repeater item' ) }
							value={ props.attributes.repeater[ idx ].item }
							onChange={ ( item ) => handleChangeField( item, idx ) }
						/>
						<IconButton
							icon="no-alt"
							label={ __( 'Remove item' ) }
							onClick={ () => handleRemoveItem( idx ) }
						/>
					</div>
				</Fragment>;
			})
		}
		return (
			<div className={ props.className }>
				{repeaterField}
				<Button
					onClick={ () => handleAddField() }
					className="button button-primary"
				>
					{ __( 'Add Field' ) }
				</Button>
			</div>
		);
	},

	save: ( props ) => {
		const repeaterFront = props.attributes.repeater.map( ( repeater, idx ) => {
			return <p key={ idx }>{ repeater.item }</p>;
		});
		return (
			<div className={ props.className }>
				{repeaterFront}
			</div>
		);
	},
} );
