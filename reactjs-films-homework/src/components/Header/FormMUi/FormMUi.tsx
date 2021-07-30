import React, { useEffect } from 'react';
import Input from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/hooks';
import useUrlSearch from '../../../hooks/useUrlSearch';

import {
  setActivePage,
  setQuery,
} from '../../../store/rootStore/mainStore/mainSlice';

// import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { IFormProps } from '../Form/types';
import { useCallback } from 'react';
import { delayOfSearch, pageAfterSearch } from '../../../constants/variables';
import useDebounce from './_utils/_useDebounce';
import fetchAutoCompleteData from './_utils/_fetchAutocompleteData';
import { IMovieCard } from '../../../types/components/movieCardTypes/types';

const FormMUi: React.FC<IFormProps> = ({ placeholder }) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(['']);
  const [state, setState] = useState<any>([]);
  const [inputValue, setInputValue] = useState<string | null>('');

  const dispatch = useAppDispatch();
  const history = useHistory();
  // const activeUrlCategory = useUrlSearch('category');
  const activeUrlPage = useUrlSearch('page');
  const activeUrlSearch = useUrlSearch('search');
  const [placeholderState, setPlaceholderState] = useState<string>(placeholder);

  const debouncedSearchTerm = useDebounce(inputValue, delayOfSearch);

  const autoComplete = useCallback((searchValue: string) => {
    if (searchValue.length && searchValue !== ' ') {
      fetchAutoCompleteData(searchValue).then((res) => {
        setState(res);
      });
    }
  }, []);

  useEffect(() => {
    if (state.length) {
      const arr: string[] = [];
      state.forEach((array: IMovieCard) => {
        arr.push(array.title);
      });
      arr.length && setOptions(arr);
    }
  }, [state]);

  useEffect(() => {
    setPlaceholderState((prev) => {
      return (prev = !activeUrlSearch
        ? placeholder
        : `Results for ${activeUrlSearch}`);
    });

    activeUrlPage && dispatch(setActivePage(pageAfterSearch));
    activeUrlSearch && dispatch(setQuery(activeUrlSearch));
  }, [activeUrlPage, activeUrlSearch, dispatch, placeholder]);

  useEffect(() => {
    onSubmit(inputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const onSubmit = useCallback(
    (data: string | null) => {
      if (data) {
        setOpen(false);
        dispatch(setActivePage(pageAfterSearch));
        dispatch(setQuery(data));
        history.push(`/?search=${data}&page=${pageAfterSearch}`);
      }
    },
    [dispatch, history]
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(inputValue);
      }}
    >
      <Autocomplete
        style={{ width: 300 }}
        forcePopupIcon={false}
        open={open}
        getOptionSelected={() => true}
        options={options && options}
        // blurOnSelect={true}
        onBlur={() => {
          setOpen(false);
          setInputValue('');
        }}
        onChange={(event, value) => {
          setInputValue(value);
          onSubmit(value);
        }}
        renderInput={(params) => (
          <Input
            {...params}
            value={inputValue}
            placeholder={placeholderState}
            onChange={(event) => {
              setOpen(true);
              setInputValue(event.target.value);
              autoComplete(event.target.value);
            }}
            variant="standard"
            color="secondary"
          />
        )}
      />
    </form>
  );
};

export default FormMUi;
