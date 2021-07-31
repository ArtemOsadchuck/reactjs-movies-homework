import React, { useEffect } from 'react';
import Input from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import useUrlSearch from '../../../hooks/useUrlSearch';

import {
  setActivePage,
  setQuery,
} from '../../../store/rootStore/mainStore/mainSlice';

// import { useForm } from 'react-hook-form';
import getLang from '../../../languages/getLanguage';

import { useState } from 'react';
import { IFormProps } from '../Form/types';
import { useCallback } from 'react';
import { delayOfSearch, pageAfterSearch } from '../../../constants/variables';
import useDebounce from './_utils/_useDebounce';
import fetchAutoCompleteData from './_utils/_fetchAutocompleteData';
import { IMovieCard } from '../../../types/components/movieCardTypes/types';
import { useSelector } from 'react-redux';
import rootStore from '../../../store/store';
import { useForm } from 'react-hook-form';
import Form from './Form';

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
  const lang = useAppSelector((state) => state.mainReducer.lang);

  const debouncedSearchTerm = useDebounce(inputValue, delayOfSearch);
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const autoComplete = useCallback((searchValue: string) => {
    if (searchValue.length && searchValue !== ' ') {
      fetchAutoCompleteData(searchValue).then((res) => {
        setState(res);
      });
    }
  }, []);

  useEffect(() => {
    if (state.length) {
      const arrOfOptions: string[] = [];
      state.forEach((array: IMovieCard) => {
        arrOfOptions.push(array.title);
      });
      arrOfOptions.length && setOptions(arrOfOptions);
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
    // onSubmit(inputValue);
    // console.log(handleSubmit(testFormValue)());

    inputValue && handleSubmit(testFormValue)();
    // handleSubmit(onSubmit)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const onSubmit = useCallback(
    (data: any) => {
      if (data) {
        setOpen(false);
        dispatch(setActivePage(pageAfterSearch));
        dispatch(setQuery(data));
        history.push(`/?search=${data}&page=${pageAfterSearch}`);
      }
    },
    [dispatch, history]
  );
  const testFormValue = (data: any) => {
    console.log(data);
    onSubmit(data.movie);
  };

  return (
    <Form onSubmit={handleSubmit(testFormValue)}>
      <Autocomplete
        style={{ width: 300 }}
        forcePopupIcon={false}
        noOptionsText={getLang(lang).noResults}
        open={open}
        getOptionSelected={() => true}
        options={options && options}
        blurOnSelect={true}
        clearOnBlur={false}
        clearOnEscape={false}
        onBlur={(event) => {
          setOpen(false);
          // setInputValue('');
        }}
        onChange={(event: any, value) => {
          // setInputValue(value);
          setInputValue('');

          onSubmit(value);
          handleSubmit(testFormValue);
        }}
        onInputChange={(event, value) => {
          // console.log(event, value);
          setInputValue(value);
          setOpen(true);
          autoComplete(value);
        }}
        renderInput={(params) => (
          <Input
            {...params}
            value={params.InputProps}
            {...register('movie', { maxLength: 5 })}
            // placeholder={placeholderState}
            // onBlur={() => setInputValue('')}
            // onChange={(event) => {
            //   setOpen(true);
            //   setInputValue(event.target.value);
            //   autoComplete(event.target.value);
            // }}
            // value={inputValue}
            // name="movie"
            // variant="standard"
            // color="secondary"
          />
        )}
      />
    </Form>
  );
};

export default FormMUi;
