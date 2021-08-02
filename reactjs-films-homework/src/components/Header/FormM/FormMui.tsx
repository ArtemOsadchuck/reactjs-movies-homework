import React, { useEffect, useState, useCallback } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import useUrlSearch from '../../../hooks/useUrlSearch';
import useDebounce from './utils/useDebounce';

import {
  setActivePage,
  setQuery,
} from '../../../store/rootStore/mainStore/mainSlice';

import { delayOfSearch, pageAfterSearch } from '../../../constants/variables';
import fetchAutoCompleteData from './utils/fetchAutocompleteData';

import { yupResolver } from '@hookform/resolvers/yup';
import schema from './utils/formValidation';

import Form from './Form';
import StyledInput from './StyledInput';
import { IFormMui } from './types';

const FormMui: React.FC<IFormMui> = ({
  placeholder,
  forcePopupIcon,
  id,
  blurOnSelect,
  clearOnBlur,
  noOptionsText,
  clearOnEscape,
}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(['']);
  const [state, setState] = useState<any>([]);
  const [inputValue, setInputValue] = useState<string | null>('');

  const dispatch = useAppDispatch();
  const history = useHistory();
  const activeUrlPage = useUrlSearch('page');
  const activeUrlSearch = useUrlSearch('search');
  const lang = useAppSelector((state) => state.mainReducer.lang);

  const debouncedSearch = useDebounce(inputValue, delayOfSearch);

  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const autoComplete = useCallback(
    (searchValue: string) => {
      if (searchValue.replace(/ /g, '').length) {
        fetchAutoCompleteData(searchValue, lang).then((res) => {
          setState(res);
        });
      }
    },
    [lang]
  );

  useEffect(() => {
    if (state?.length) {
      const arrOfOptions: string[] = [];
      state.forEach((movie: { title: string }) => {
        arrOfOptions.push(movie.title);
      });
      arrOfOptions.length && setOptions(arrOfOptions);
    }
  }, [state]);

  useEffect(() => {
    activeUrlPage && dispatch(setActivePage(pageAfterSearch));
    activeUrlSearch && dispatch(setQuery(activeUrlSearch));
  }, [activeUrlPage, activeUrlSearch, dispatch]);

  useEffect(() => {
    inputValue && handleSubmit(testFormValue)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  const onSubmit = useCallback(
    (data: string) => {
      if (data?.length) {
        setOpen(false);
        dispatch(setActivePage(pageAfterSearch));
        dispatch(setQuery(data));
        history.push(`/?search=${data}&page=${pageAfterSearch}`);
      }
    },
    [dispatch, history]
  );
  const testFormValue = (data: { movie: string }) => {
    onSubmit(data.movie);
  };

  return (
    <Form onSubmit={handleSubmit(testFormValue)}>
      <Autocomplete
        forcePopupIcon={forcePopupIcon}
        noOptionsText={noOptionsText}
        defaultValue={''}
        open={open}
        id={`mui-${id}`}
        getOptionSelected={() => true}
        options={options && options}
        blurOnSelect={blurOnSelect}
        clearOnBlur={clearOnBlur}
        clearOnEscape={clearOnEscape}
        onBlur={() => setOpen(false)}
        onChange={(event, value) => {
          setInputValue('');
          value && onSubmit(value);
        }}
        onInputChange={(event, value) => {
          setInputValue(value);
          setOpen(true);
          autoComplete(value);
          !value && setOpen(false);
        }}
        renderInput={(params) => (
          <StyledInput
            {...params}
            placeholder={placeholder}
            value={params.InputProps}
            variant="standard"
            {...register('movie')}
          />
        )}
      />
    </Form>
  );
};

export default FormMui;
