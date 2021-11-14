package ru.demo.tgbot.service;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import ru.demo.tgbot.repository.IncomeRepository;
import ru.demo.tgbot.repository.SpendRepository;

/**
 * @author Sergei Usov
 * @version 1.0.0
 */
@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class FinanceServiceTestTwo {
    @InjectMocks
    private FinanceService financeService;
    @Mock
    private SpendRepository spendRepository;
    @Mock
    private IncomeRepository incomeRepository;

    @Test
    public void addFinanceOperationTest() {
        // установили произвольное значение переменной для отправки в метод
        String price = "150.0";
        // обращаемся к методу с произвольными параметрами и сохраняем результат в переменную
        String message = financeService.addFinanceOperation("/addincome", price, 500L);
        // убеждаемся, что получили ожидаемый результат
        Assert.assertEquals("Доход в размере " + price + " был успешно добавлен", message);
        // меняем значение на какое-нибудь произвольное другое
        price = "200";
        // снова обращаемся к методу с другими параметрами
        message = financeService.addFinanceOperation("/nan", price, 250L);
        // убеждаемся, что получили ожидаемый результат
        Assert.assertEquals("Расход в размере " + price + " был успешно добавлен", message);
    }
}