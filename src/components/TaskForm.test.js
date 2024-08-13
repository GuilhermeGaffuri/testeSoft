import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskForm from './TaskForm';

describe('TaskForm Component', () => {
  test('renders input and button', () => {
    render(<TaskForm onAdd={() => {}} />);
    expect(screen.getByPlaceholderText('Digite o nome da tarefa')).toBeInTheDocument();
    expect(screen.getByText('Adicionar')).toBeInTheDocument();
  });

  test('displays error message when task title is empty', () => {
    render(<TaskForm onAdd={() => {}} />);
    fireEvent.click(screen.getByText('Adicionar'));
    expect(screen.getByText('O nome da tarefa não pode estar em branco.')).toBeInTheDocument();
  });

  test('calls onAdd with the task title when form is submitted', () => {
    const onAdd = jest.fn();
    render(<TaskForm onAdd={onAdd} />);
    fireEvent.change(screen.getByPlaceholderText('Digite o nome da tarefa'), {
      target: { value: 'Nova Tarefa' }
    });
    fireEvent.click(screen.getByText('Adicionar'));
    expect(onAdd).toHaveBeenCalledWith('Nova Tarefa');
  });

  test('clears input and error message after successful submission', () => {
    const onAdd = jest.fn();
    render(<TaskForm onAdd={onAdd} />);
    const input = screen.getByPlaceholderText('Digite o nome da tarefa');
    fireEvent.change(input, {
      target: { value: 'Nova Tarefa' }
    });
    fireEvent.click(screen.getByText('Adicionar'));
    expect(input.value).toBe('');
    expect(screen.queryByText('O nome da tarefa não pode estar em branco.')).not.toBeInTheDocument();
  });

  test('clears error message when typing in the input field after an error', () => {
    render(<TaskForm onAdd={() => {}} />);
    fireEvent.click(screen.getByText('Adicionar'));
    expect(screen.getByText('O nome da tarefa não pode estar em branco.')).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText('Digite o nome da tarefa'), {
      target: { value: 'Nova Tarefa' }
    });
    expect(screen.queryByText('O nome da tarefa não pode estar em branco.')).not.toBeInTheDocument();
  });
});

/*
Descrição dos Testes
renders input and button

Verifica se o campo de entrada e o botão de envio são renderizados corretamente.
displays error message when task title is empty

Simula um clique no botão de adicionar sem inserir um título de tarefa e verifica se a mensagem de erro é exibida.
calls onAdd with the task title when form is submitted

Insere um título de tarefa, simula um clique no botão de adicionar e verifica se a função onAdd é chamada com o título correto.
clears input and error message after successful submission

Insere um título de tarefa, simula um clique no botão de adicionar, e verifica se o campo de entrada e a mensagem de erro são limpos.
clears error message when typing in the input field after an error

Simula um erro de título vazio, depois insere um título de tarefa e verifica se a mensagem de erro é removida.
*/