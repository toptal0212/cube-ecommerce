import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
	return (
		<>
			<form
				id="search-form"
				className="relative flex items-center text-sm"
				onSubmit={props.search}
			>
				<div
					id="search-bar"
					className="flex items-center px-2 xsm:pl-4 xsm:pr-2"
				>
					<input
						type="text"
						value={props.searchValue}
                        name="searchBar"
						onChange={props.changeSearchValue}
						placeholder="Search for product"
						className="px-2 py-1 border-4 rounded-full border-lightishGray outline-none focus:border-darkLightishGray transition-all ease-in-out duration-100 w-32 xsm:w-48 md:w-52 lg:w-96 xl:w-[36rem]"
					/>
					<div
						id="search-icon"
						className="bg-lightishGray rounded-full h-[36px] w-[36px] text-center flex items-center cursor-pointer justify-center  mx-2 transition-all ease-in-out duration-100 hover:bg-darkLightishGray bg"
						onClick={props.search}
					>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</div>
				</div>
			</form>
		</>
	);
};

export default SearchBar;
